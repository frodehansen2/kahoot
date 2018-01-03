import * as React from "react";
import * as classNames from "classnames";

interface Props {
	value: string | number | boolean;
	className: string;
	inline?: boolean;
	duration?: number;
}
interface State {
	active: boolean;
}

class Hightlight extends React.Component<Props, State> {
	static defaultProps: any = {
		duration: 300
	};
	timeoutId: number;
	constructor(props: Props) {
		super(props);
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.state = {
			active: false
		};
	}

	componentWillReceiveProps(nextProps: Props) {
		if (nextProps.value !== this.props.value) {
			this.start();
		}
	}
	start() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
		this.timeoutId = setTimeout(this.end, this.props.duration);
		this.setState({ active: true });
	}

	end() {
		this.timeoutId = -1;
		this.setState({ active: false });
	}

	render() {
		const { inline, children, className } = this.props;
		const cls = classNames(className, {
			[`${className}--active`]: this.state.active
		});
		if (inline) {
			return <span className={cls}>{children}</span>;
		}
		return <div className={cls}>{children}</div>;
	}
}

export default Hightlight;
