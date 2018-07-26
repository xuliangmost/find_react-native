import React, {
	AsyncStorage,
	Alert
} from 'react-native';

class localStorageS {
	static async getString (key, defaultValue) {
		let result = null;
		let noDataError = {"msg": "No value found !"};
		if (key != null) {
			result = await AsyncStorage.getItem(key);
			result = JSON.parse(result);
			console.log(result);
			return result ? result : defaultValue != null ? defaultValue : Promise.reject(noDataError);
		} else {
			if (defaultValue) {
				return Promise.resolve(defaultValue);
			} else {
				return Promise.reject(noDataError);
			}
		}
	}

	static save (key, value) {
		return new Promise((resolve, reject) => {
			AsyncStorage.setItem(key, JSON.stringify(value), (error) => {
				if (error) {
					reject(fasle)
				} else {
					resolve(true)
				}
			});
		})
	}

	static async update (key, value) {

		try {
			let value = await AsyncStorage.getItem(key);
			if (value !== null) {
				value = typeof value === 'string' ? value : Object.assign({}, item, value);
				return AsyncStorage.setItem(key, JSON.stringify(value));
			}
		} catch (error) {
		}
	}

	static delete (key) {
		return AsyncStorage.removeItem(key);
	}

	static clear () {
		return AsyncStorage.clear();
	}
}

export {
	localStorageS
};
