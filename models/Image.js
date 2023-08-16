import uuid from 'react-native-uuid';

export class Image {
  constructor(title, imageUri) {
    this.id = uuid.v4();
    this.title = title;
    this.imageUri = imageUri;
  }
}
