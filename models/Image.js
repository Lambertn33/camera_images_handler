import { uuid as uuidV4 } from "uuidv4";

class Image {
  constructor(title, imageUri) {
    this.id = uuidV4();
    this.title = title;
    this.imageUri = imageUri;
  }
}
