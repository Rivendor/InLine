import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import TelaPrincipal from "./src/screens/TelaPrincipal";

const Project= createStackNavigator({
  TelaPrincipal: {
   screen: TelaPrincipal
  }
});

export default createAppContainer(Project);