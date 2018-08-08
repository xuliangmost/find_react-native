/**@flow*/
import * as React from 'react'
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native'

type Props = {}

class SubContent extends React.Component<Props, any> {
	render () {
		return (
			<View style={styles.sub_content}>
				<TouchableOpacity
					style={styles.sub_content_image_container}
					activeOpacity={.7}>
					<Image
						style={styles.sub_content_image}
						source={{uri: 'http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/c/cgsv4c3m0avgxmq.jpg'}}/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.sub_content_image_container}
					activeOpacity={.7}>
					<Image
						style={styles.sub_content_image}
						source={{uri: 'http://09.imgmini.eastday.com/mobile/20180723/20180723230627_16f4705745fb2affaaee62c90b79ade4_1.jpeg'}}/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.sub_content_image_container}
					activeOpacity={.7}>
					<Image
						style={styles.sub_content_image}
						source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533711200996&di=3b2ad13e623fddfc5598fafb7b6f63ec&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fent%2Fy%2F2009-08-27%2FU2223P28T3D2672147F326DT20090827170752.jpg'}}/>
				</TouchableOpacity>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	sub_content: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10
	},
	sub_content_image_container: {
		height: 200,
		width: '48%',
		margin: '1%',
	},
	sub_content_image: {
		width: '100%',
		height: '100%',
		borderRadius: 4
	}
});

export default SubContent