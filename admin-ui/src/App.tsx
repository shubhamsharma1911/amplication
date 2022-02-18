import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { FacilityList } from "./facility/FacilityList";
import { FacilityCreate } from "./facility/FacilityCreate";
import { FacilityEdit } from "./facility/FacilityEdit";
import { FacilityShow } from "./facility/FacilityShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { ProviderList } from "./provider/ProviderList";
import { ProviderCreate } from "./provider/ProviderCreate";
import { ProviderEdit } from "./provider/ProviderEdit";
import { ProviderShow } from "./provider/ProviderShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { RuleList } from "./rule/RuleList";
import { RuleCreate } from "./rule/RuleCreate";
import { RuleEdit } from "./rule/RuleEdit";
import { RuleShow } from "./rule/RuleShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"platform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Facility"
          list={FacilityList}
          edit={FacilityEdit}
          create={FacilityCreate}
          show={FacilityShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="Provider"
          list={ProviderList}
          edit={ProviderEdit}
          create={ProviderCreate}
          show={ProviderShow}
        />
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Rule"
          list={RuleList}
          edit={RuleEdit}
          create={RuleCreate}
          show={RuleShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
      </Admin>
    </div>
  );
};

export default App;
