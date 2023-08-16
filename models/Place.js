import { uuid as uuidV4 } from "uuidv4";

class Place {
  constructor(title, imageUri, address, location) {
    this.id = uuidV4();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}
