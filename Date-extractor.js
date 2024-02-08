function start() {

    function bigIntToBinary(bigIntNumber) {
        if (bigIntNumber === 0n) return '0';

        let result = '';
        let number = bigIntNumber < 0 ? -bigIntNumber : bigIntNumber;
        while (number > 0n) {
            result = (number & 1n) + result;
            number >>= 1n;
        }

        return result;
    }

    function extractID() {

        try {
            const linkedinURL = document.querySelector("#link").value;
            const regex = /([0-9]{19})/;
            const postId = regex.exec(linkedinURL).pop();

            return postId;
        } catch (error) {
            alert("Invalid link! Please provide a valid LinkedIn post link")
        }
    }


    function convertEpochToLocalTime(epochTime) {

        let localDate = new Date(epochTime);

        let localTime = localDate.toString();

        return localTime;
    }

    function convertEpochToGMT(epochTime) {
        let gtime = new Date(epochTime);

        let time = gtime.toGMTString()
        return time;
    }


    let PostID = BigInt(extractID());
    // console.log(bigIntToBinary(bigIntNumber)); 
    let First41 = bigIntToBinary(PostID).substring(0, 41)
    let Epoch = parseInt(First41, 2);
    let localTime = convertEpochToLocalTime(Epoch);
    let GMTime = convertEpochToGMT(Epoch)
    document.getElementById("localTime").innerText = "As per Your timezone: " + localTime;
    document.getElementById("GMTime").innerText = "GMT: " + GMTime;


}