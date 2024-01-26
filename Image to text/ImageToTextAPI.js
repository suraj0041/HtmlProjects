let apikey = 'K82851621988957'

function test(img_base64String) {

  if (img_base64String.length == 0) {
    DisplayError("Image not found");
    return;
  }
  $('#lblError').text('Loading...');
  //const img_base64String = localStorage.getItem("myCat");
  //Prepare form data
  var formData = new FormData();
  formData.append("base64Image", img_base64String);//''+
  //formData.append("url", "1.png");
  formData.append("language", "eng");
  formData.append("apikey", apikey);
  formData.append("isOverlayRequired", true);
  formData.append("filetype", 'PNG');
  //formData.append("Content-Type", 'image/png');
  //Send OCR Parsing request asynchronously
  jQuery.ajax({
    url: 'https://api.ocr.space/parse/image',
    data: formData,
    dataType: 'json',
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(ocrParsedResult) {
      $('#lblError').text('done');
      //Get the parsed results, exit code and error message and details
      var parsedResults = ocrParsedResult["ParsedResults"];
      var ocrExitCode = ocrParsedResult["OCRExitCode"];
      var isErroredOnProcessing = ocrParsedResult["IsErroredOnProcessing"];
      var errorMessage = ocrParsedResult["ErrorMessage"];
      var errorDetails = ocrParsedResult["ErrorDetails"];
      var processingTimeInMilliseconds = ocrParsedResult["ProcessingTimeInMilliseconds"];

      if (isErroredOnProcessing) {
        DisplayError(errorMessage);
      }
      //If we have got parsed results, then loop over the results to do something
      if (parsedResults != null) {
        console.log(JSON.stringify(parsedResults));
        //Loop through the parsed results
        $.each(parsedResults, function(index, value) {
          var exitCode = value["FileParseExitCode"];
          var parsedText = value["ParsedText"];
          var errorMessage = value["ParsedTextFileName"];
          var errorDetails = value["ErrorDetails"];
          var textOverlay = value["TextOverlay"];
          var pageText = '';
          switch (+exitCode) {
            case 1:
              pageText = parsedText;
              break;
            case 0:
            case -10:
            case -20:
            case -30:
            case -99:
            default:
              pageText += "Error: " + errorMessage;
              break;
          }

          //$.each(textOverlay["Lines"], function (index, value) {
          // ..........................
          // ..........................
          // ..........................
          // LOOP THROUGH THE LINES AND GET WORDS TO DISPLAY ON TOP OF THE IMAGE AS OVERLAY
          // ..........................
          // ..........................
          // ..........................
          //});

          // ..........................
          // ..........................
          // ..........................
          // YOUR CODE HERE
          // ..........................
          // ..........................
          // ..........................
          DisplayText(parsedText);

        });
      }
    }
  });
}

function DisplayError(Errormessage) {
  $('#lblResult').val(JSON.stringify(Errormessage));
}

function DisplayText(ParsedText) {
  localStorage.setItem("GetFromImage", "");
  $('#lblResult').val(ParsedText);
}