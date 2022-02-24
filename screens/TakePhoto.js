import { Camera } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";

import { StatusBar, TouchableOpacity, Image, Text, Alert } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Actions = styled.View`
  flex: 0.35;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;

const PhotoActions = styled(Actions)`
  flex-direction: row;
`;

const PhotoAction = styled.TouchableOpacity`
  background-color: white;
  padding: 10px 25px;
  border-radius: 4px;
`;
const PhotoActionText = styled.Text`
  font-weight: 600;
`;

export default function TakePhoto() {
  const camera = useRef();
  const [takenPhoto, setTakenPhoto] = useState("");
  const [cameraReady, setCameraReady] = useState(false);
  const [ok, setOk] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const getPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setOk(status === "granted");
  };
  useEffect(() => {
    getPermissions();
  }, [ok]);
  const onCameraReady = () => setCameraReady(true);
  const takePhoto = async () => {
    if (camera.current && cameraReady) {
      const { uri } = await camera.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      //const asset = await MediaLibrary.createAssetAsync(photo.uri);
      setTakenPhoto(uri);
    }
  };
  const onDismiss = () => setTakenPhoto("");
  const goToUpload = async (save) => {
    if (save) {
      await MediaLibrary.saveToLibraryAsync(takenPhoto);
    }
    console.log("Will upload", takenPhoto);
  };
  const onUpload = () => {
    Alert.alert("Save photo?", "Save photo & upload or just upload", [
      {
        text: "Save & Upload",
        onPress: () => goToUpload(true),
      },
      {
        text: "Just Upload",
        onPress: () => goToUpload(false),
      },
    ]);
  };
  return (
    <Container>
      <StatusBar hidden={true} />
      {takenPhoto === "" ? (
        <Camera
          type={cameraType}
          ref={camera}
          onCameraReady={onCameraReady}
          style={{ flex: 1 }}
        />
      ) : (
        <Image source={{ uri: takenPhoto }} style={{ flex: 1 }} />
      )}
      {takenPhoto === "" ? (
        <Actions>
          <TakePhotoBtn onPress={takePhoto} />
        </Actions>
      ) : (
        <PhotoActions>
          <PhotoAction onPress={onDismiss}>
            <PhotoActionText>Dismiss</PhotoActionText>
          </PhotoAction>
          <PhotoAction onPress={onUpload}>
            <PhotoActionText>Upload</PhotoActionText>
          </PhotoAction>
        </PhotoActions>
      )}
    </Container>
  );
}
