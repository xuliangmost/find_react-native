/**@flow*/

import * as React from 'react'
import {
	Dimensions, Text,
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import FoundSubTitle from "./foundSubTitle";
import Carouses from "../../common/carouse";
import SubNav from './subNav'
import {recommendStyles} from "../recommend/carousel";

const {width} = Dimensions.get('window');
type Props = {
	navigation: Object
}


class Found extends React.Component<Props> {

	componentDidMount () {
		console.log(this.props.navigation.isFocused())
	}

	render () {
		const {navigation} = this.props;
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<ScrollView>
					<FoundSubTitle title={'期刊专题'}/>
					<Carouses
						layout={'stack'}
						navigation={navigation}
						data={[{name: 1, total: 1}, {name: 2, total: 2}, {name: 3, total: 2}, {name: 4, total: 2}]}
						sliderType={0}
						renderItem={(item) => (
							<TouchableOpacity activeOpacity={.7}>
								<View style={{padding: 10}}>
									<ImageBackground
										style={{height: width * .6}}
										source={{uri: 'https://goss.veer.com/creative/vcg/veer/800water/veer-159132220.jpg'}}
									>
										<View style={[recommendStyles.float_view, {bottom: 22}]}>
											<Text style={recommendStyles.float_view_name}>{item.name}</Text>
										</View>
										<View style={recommendStyles.float_view}>
											<Text style={recommendStyles.float_view_total}>第{item.total}期</Text>
										</View>
									</ImageBackground>
								</View>
							</TouchableOpacity>
						)}
						onSnapToItem={(index) => {
						}}
					/>
					<FoundSubTitle title={'期刊分类'}/>
					<SubNav/>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({});

export default Found