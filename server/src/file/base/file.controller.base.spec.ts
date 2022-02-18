import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { FileController } from "../file.controller";
import { FileService } from "../file.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  available: "true",
  checksum: "exampleChecksum",
  createdAt: new Date(),
  fileExt: "exampleFileExt",
  fileSize: "exampleFileSize",
  id: "exampleId",
  language: "exampleLanguage",
  name: "exampleName",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  available: "true",
  checksum: "exampleChecksum",
  createdAt: new Date(),
  fileExt: "exampleFileExt",
  fileSize: "exampleFileSize",
  id: "exampleId",
  language: "exampleLanguage",
  name: "exampleName",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    available: "true",
    checksum: "exampleChecksum",
    createdAt: new Date(),
    fileExt: "exampleFileExt",
    fileSize: "exampleFileSize",
    id: "exampleId",
    language: "exampleLanguage",
    name: "exampleName",
    thumbnail: "exampleThumbnail",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  available: "true",
  checksum: "exampleChecksum",
  createdAt: new Date(),
  fileExt: "exampleFileExt",
  fileSize: "exampleFileSize",
  id: "exampleId",
  language: "exampleLanguage",
  name: "exampleName",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("File", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FileService,
          useValue: service,
        },
      ],
      controllers: [FileController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /files", async () => {
    await request(app.getHttpServer())
      .post("/files")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /files", async () => {
    await request(app.getHttpServer())
      .get("/files")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /files/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/files"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /files/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/files"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
