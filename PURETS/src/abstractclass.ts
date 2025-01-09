abstract class TakePhoto {
    constructor(
        public cmaeraMode: string,
        public filter: string,
    ) { }
    abstract getSepia(): void
    getReelsTime(): number {
        //some complex calculation
        return 18
    }
}
class Instagram extends TakePhoto {
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
const akshay = new Instagram("test", "test", 3)
akshay.getReelsTime

