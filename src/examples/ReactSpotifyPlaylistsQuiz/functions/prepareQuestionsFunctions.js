export function prepareQuestions(playlistTracks) {
    let indexesForQuestions = [];
    let indexesForWrongAnswers = [];
    let i;
    let dataset = [];
    let question;
    let C_answer;
    let W_answer;

/***********************

    I first thought calculating unique indexes as below. However, if total number of tracks in the selected playlist
    is even, then there is a posibilty of getting the same index for both indexesForQuestions and indexesForWrongAnswers.
    Although there are ways to overcome this, I decided to get 10 unique indexes and split the array.

    const indexesForQuestions = Array.from({ length: 5 }, () => Math.floor(Math.random() * playlistTracks.length));

    for (j = 0; j < indexesForQuestions.length; j++) {
        indexesForWrongAnswers.push(playlistTracks.length - indexesForQuestions[j]);
    }

    NOTE 1: This function does not look for duplicates. i.e.: Imagine a playlist consists of only Metallica songs.
            In that case, "Who / which group sings....?" question will always have the same answer.
    NOTE 2: This function does not check for 'undefined'. It is possible to have undefined answers in questions.
    NOTE 3: This function does not check number of tracks in the selected playlist. This could cause duplicate questions
            or same answers. Since I am selecting 10 random indexes from the playlist, any playlist with less than 10 
            tracks would have duplicate indexes. We may experience this duplication either in questions or answers.
            
***********************/
    
    const mixIndexes = Array.from({ length: 10 }, () => Math.floor(Math.random() * playlistTracks.length));
    indexesForQuestions = mixIndexes.slice(0, 5);
    indexesForWrongAnswers = mixIndexes.slice(5, 10);

    for (i = 0; i < indexesForQuestions.length; i++) {
        let item1 = (String(playlistTracks[indexesForQuestions[i]])).split('+');
        let item2 = (String(playlistTracks[indexesForWrongAnswers[i]])).split('+');

        if (i % 2 === 0) {
            question = "Who / which group sings '" + item1[2] + "'?";
            C_answer = item1[0];
            W_answer = item2[0];

        } else {
            question = "Which '" + item1[0] + "' album is '" + item1[2] + "' on?";
            C_answer = item1[1];
            W_answer = item2[1];
        }
        dataset.push({question, C_answer, W_answer});
    }
    return dataset;
}