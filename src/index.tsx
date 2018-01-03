import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";
import reducers from "./reducers";
import "./styles/index.less";

import { Provider } from "react-redux";
import { createStore } from "redux";

function configureStore() {
	/* tslint:disable */
	const devtools: any =
		/* tslint:disable-next-line */
		window["devToolsExtension"]
			? /* tslint:disable-next-line */
				window["devToolsExtension"]()
			: (f: any) => f;
	/* tslint:enable */
	return createStore(reducers, devtools);
}

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root") as HTMLElement
);
