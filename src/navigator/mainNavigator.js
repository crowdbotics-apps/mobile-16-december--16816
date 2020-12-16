import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfCopyOfCopyOfBlankScreen015816Navigator from '../features/CopyOfCopyOfCopyOfCopyOfBlankScreen015816/navigator';
import CopyOfCopyOfCopyOfBlankScreen015815Navigator from '../features/CopyOfCopyOfCopyOfBlankScreen015815/navigator';
import CopyOfCopyOfBlankScreen015814Navigator from '../features/CopyOfCopyOfBlankScreen015814/navigator';
import CopyOfBlankScreen015813Navigator from '../features/CopyOfBlankScreen015813/navigator';
import BlankScreen015812Navigator from '../features/BlankScreen015812/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfCopyOfCopyOfBlankScreen015816: { screen: CopyOfCopyOfCopyOfCopyOfBlankScreen015816Navigator },
CopyOfCopyOfCopyOfBlankScreen015815: { screen: CopyOfCopyOfCopyOfBlankScreen015815Navigator },
CopyOfCopyOfBlankScreen015814: { screen: CopyOfCopyOfBlankScreen015814Navigator },
CopyOfBlankScreen015813: { screen: CopyOfBlankScreen015813Navigator },
BlankScreen015812: { screen: BlankScreen015812Navigator },

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
