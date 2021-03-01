import { createBrowserNavigation } from "navi";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Router, View } from "react-navi";
import HelmetProvider from "react-navi-helmet-async";
import "./index.module.css";
import routes from "./routes";
import { BlogContainer } from "./styledElements";

class Blog extends React.Component {
    constructor(props) {
      super(props);
    
      // These props will be passed down from our react-router routes.
      const { history, basename } = this.props;
    
      this.state = {
        navigation: createBrowserNavigation({
          history,
          basename,
          routes
        })
      };
    }
    
    componentDidMount() {
      const { navigation } = this.state;
    
      // Wait until the navigation has loaded the page's content, or failed to do
      // so.
      const getRoute = async () => {
        await navigation.getRoute();
    
        this.setState(state => ({
          navigation: state.navigation
        }));
      };
    
      getRoute();
    }
    
    render() {
      const { navigation } = this.state;
      // Pass in the current navigation state and render our blog's
      // routes through react-navi's View and Router components.
      return (
        <HelmetProvider>
          <Router navigation={navigation}>
            <Suspense fallback={null}>
              <View />
            </Suspense>
          </Router>
        </HelmetProvider>
      );
    }
   }
    
   export default Blog;