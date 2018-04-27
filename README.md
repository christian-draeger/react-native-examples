React Native Example Apps
=========================

This is a react-native playground of mine.

including:
----------

[albums](https://github.com/christian-draeger/react-native-examples/tree/master/albums)
* communicates with an rest api and shows a tile view of music albums including artist name, artist picture, album name, album cover and a buy link
	

prerequisites
-------------

* node installed

	`brew install node`
	
* install react-native

	`npm install -g create-react-native-app`
	
* if you want to work with an iOS simulator you need to have XCode installed

* if you want to work with an Android simulator you need to have one running (for instance by using Android Studios AVD Manager or Genymotion)

* if you want to run an app on a real device install expo for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iPhone](https://itunes.apple.com/us/app/expo-client/id982107779).
After running an project on your local mashine a QR code will be prompted on your terminal. Scan this QR Code via the Expo App (your develpment mashine and your mobile device needs to be in the same WLAN to make magic happen).
	
	
add a new project
-----------------

```
create-react-native-app AwesomeProject
cd AwesomeProject
npm start
```

further instructions
--------------------

Have a look at the generated README.md in the AwesomeProjects root folder
