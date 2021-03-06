import React from "react";
import { Scene, Stack, Router } from "react-native-router-flux";
import { StyleSheet } from "react-native";

import CoursesPage from "./pages/CoursesPage";
import Login from "./pages/Login";
import AttendancePage from "./pages/AttandancePage";
import AttendanceReport from "./pages/AttendanceReport";
import AttendanceList from "./pages/AttendanceList";

export default function RouterComponent() {
  return (
    <Router>
      <Stack hideNavBar key="root">
        <Stack
          key="auth"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene title="Log In" key="login" component={Login} initial />
        </Stack>
        <Stack
          key="main"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene title="Admin" key="admin" component={CoursesPage} initial />
          <Scene title="Attendance" key="attendance" component={AttendancePage} />
          <Scene title="Attendance Report" key="report" component={AttendanceReport} />
          <Scene title="Attendance List" key="alist" component={AttendanceList} />
        </Stack>
      </Stack>
    </Router>
  );
}

const style = StyleSheet.create({
  navBarStyle: {},
  titleStyle: {
    flexDirection: "row",
    width: 200,
  },
});
