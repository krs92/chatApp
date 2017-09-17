import React, {
    Component
} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class AppContainer extends Component {
    render() {
        return ( <
            MuiThemeProvider > {
                this.props.children
            } <
            /MuiThemeProvider>
        );
    }
}

export default AppContainer;