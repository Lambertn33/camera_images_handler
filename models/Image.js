import { v4 as uuidV4 } from 'react-native-uuid';

export class Image {
  constructor(title, imageUri) {
    this.id = uuidV4();
    this.title = title;
    this.imageUri = imageUri;
  }
}
