const POST_URL = "WEBHOOK_URL_HERE";
// use {{Field Name}} and remember to use \\n for new lines
let EMBED_TEMPLATE = `{
	"embeds": [{
		"description": "{{Test question?}}",
		"title": "**{{Name}}** just submitted a form!",
		"timestamp": "{{Timestamp}}",
		"url": "{{Response URL}}"
	}]
}`;

function onSubmit (e) {
    const form = FormApp.getActiveForm();
    const allResponses = form.getResponses();
    const latestResponse = allResponses[allResponses.length - 1];
    const response = latestResponse.getItemResponses();
    let items = [];

    for (let i = 0; i < response.length; i++) {
        let question = response[i].getItem().getTitle();
        let answer = response[i].getResponse();
        items.push({
            question, answer
        })
    }

    let embed = EMBED_TEMPLATE;

    items.push(({
        "question": "Response URL",
        "answer": `https://docs.google.com/forms/d/${form.getId()}/edit#response=r`
    }))
    items.push(({
        "question": "Timestamp",
        "answer": (new Date(latestResponse.getTimestamp())).toISOString()
    }))


    items.forEach(item => {
        if (embed.indexOf("{{" + item.question + "}}") !== -1) {
            embed = embed.replace("{{" + item.question + "}}", item.answer);
        }
    })
    
    let options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": embed
    };

    try {
      UrlFetchApp.fetch(POST_URL, options);
    } catch (e) {
      Logger.log(e);
    }
};
