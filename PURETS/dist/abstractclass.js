"use strict";
class TakePhoto {
    constructor(cmaeraMode, filter) {
        this.cmaeraMode = cmaeraMode;
        this.filter = filter;
    }
    getReelsTime() {
        //some complex calculation
        return 18;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const akshay = new Instagram("test", "test", 3);
akshay.getReelsTime;
