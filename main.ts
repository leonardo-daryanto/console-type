namespace serial {
    /**
     *  make a console type
     */
    //% block
    //% group="Advanced"
    export function showConsoleString(stringType: string): void {
        
        serial.writeLine(stringType)
    }
}
