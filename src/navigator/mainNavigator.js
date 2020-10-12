import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen312136Navigator from '../features/BlankScreen312136/navigator';
import BlankScreen111741Navigator from '../features/BlankScreen111741/navigator';
import BlankScreen211688Navigator from '../features/BlankScreen211688/navigator';
import BlankScreen011588Navigator from '../features/BlankScreen011588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen312136: { screen: BlankScreen312136Navigator },
BlankScreen111741: { screen: BlankScreen111741Navigator },
BlankScreen211688: { screen: BlankScreen211688Navigator },
BlankScreen011588: { screen: BlankScreen011588Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
