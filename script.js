$('#commandDiv').terminal({

  help: function () {
    this.echo(
      '\n Commands:' +
      '\n  help : see list of commands' +
      '\n  ask type_of_language_model' +
      '\n  example type_of_language_model' +
      '\n\n Types of Language Model: ' +
      '\n  - ngram' +
      '\n  - rnn' +
      '\n  - lstm' +
      '\n  - transformers' +

      '\n\n V example input V' +
      '\n\n    ask ngram' +
      '\n\n (hint: case sensitive, please type in lower case)' +
      '\n'
    );
  },

  ask: function (element) {
    if (element == 'ngram') {
      this.echo(
        '\n N-gram' +
        '\n' +
        '\n Models that predict the next word in a sequence based on the frequency of word pairs or groups in a text, assigning probabilities to word sequences.' +
        '\n'
      );
    } else if (element == 'rnn') {
      this.echo(
        '\n Recurrent Neural Networks (RNN)' +
        '\n' +
        '\n A type of neural network that uses a feedback loop to unroll the network, working well with different amounts of sequential data.' +
        '\n'
      );
    } else if (element == 'lstm') {
      this.echo(
        '\n Long Short-Term Memory (LSTM)' +
        '\n' +
        '\n A type of neural network built on the framework of RNNs. It incorporates a memory cell that can maintain information over longer sequences, thereby mitigating the limitations of the vanilla RNN.' +
        '\n'
      );
    } else if (element == 'transformers') {
      this.echo(
        '\n Transformers' +
        '\n' +
        '\n This language model(LM) revolutionized natural language processing(NLP) with parallel training on large datasets and efficient data handling. They learn word order from positional encodings in data and can be adapted for various NLP tasks like summarization and question answering.' +
        '\n'
      );
    } else {
      this.echo(
        '\n error? incorrect input' +
        '\n Type \'help\' for commend list?'
      );
    }
  },

  example: function (element) {
    if (element == 'ngram') {
      const ngram_ex = [
        'displaying uniform on Af and competent observers reverses the institution can be said he had',
        'stinging blow which he would seem to explore indicating that he uses her first level',
        'overrode the husband away from the subject I never is possible to be physically fit',
        'marshal who is not escape this case one thing that even panic of his pockets',
        'rattling of geographical environment in so my hand or whatever face with the tawny beard',
        'adversaries and astronomy would take comfort and the architect might even though she stayed here',
        "defiant charge or Russians in Salyer's Canyon voice pleaded for factories without compensation plan should",
        'spruce can force of whom he was about years to having one route between what',
        'Compute this way though granted but it has been unusual lad quite prepared and the',
        'Electronic Industries Association Newman and his Sun-Times column were hypothesized that pertains to instruct the',
        'Pay him from camps coming loss of anti-A and changed the manifest themselves but not',
        "consderations for working-class youth with the book's character of beds to the problem in Rhode",
        'wrongful act of Portland University of the others will give her fingers of H. Sloane',
        "Commissioner's Office Department's recommendation to anyone who retired under physiological agent of the winter rubbing",
        'skeptical cynical comment and she was back him aid in a man in order to',
        'whiskey for pepper celery and most helpful to make successively in a sizzling day in',
        'Hosaka is raised many of volunteers sending the author begins to check back on him',
        'southwest of us therefore if she would not a set records keeping them of violating',
        'summer-winter domestic sewage system where p is the rough to pull hen and shape within',
        'congregated in the professional meetings are estimated return for no longer than one would have'
      ];
      const randomIndex = Math.floor(Math.random() * ngram_ex.length);
      const randomEx = ngram_ex[randomIndex];

      this.echo(
        '\n N-gram example' +
        '\n' +
        randomEx +
        '\n'
      );
    } else if (element == 'rnn') {
      this.echo(
        '\n Recurrent Neural Networks (RNN) output example' +
        '\n' +
        '\n Model: "sequential_1" ' +
        '\n Layer (type)                Output Shape              Param #   ' +
        '\n_________________________________________________________________' +
        '\n=================================================================' +
        '\n embedding_1 (Embedding)     (None, None, 64)          64000     ' +
        '\n                                                                 ' +
        '\n gru (GRU)                   (None, None, 256)         247296    ' +
        '\n                                                                 ' +
        '\n simple_rnn (SimpleRNN)      (None, 128)               49280     ' +
        '\n                                                                 ' +
        '\n dense_1 (Dense)             (None, 10)                1290      ' +
        '\n                                                                 ' +
        '\n=================================================================' +
        '\nTotal params: 361866 (1.38 MB)                                   ' +
        '\nTrainable params: 361866 (1.38 MB)                               ' +
        '\nNon-trainable params: 0 (0.00 Byte)                              ' +
        '\n_________________________________________________________________' +
        '\n'
      );
    } else if (element == 'lstm') {
      this.echo(
        '\n Recurrent Neural Networks (RNN) output example' +
        '\n' +
        '\n Model: "sequential_1" ' +
        '\n Layer (type)                Output Shape              Param #   ' +
        '\n_________________________________________________________________' +
        '\n=================================================================' +
        '\n embedding_1 (Embedding)     (None, None, 64)          64000     ' +
        '\n                                                                 ' +
        '\n gru (GRU)                   (None, None, 256)         247296    ' +
        '\n                                                                 ' +
        '\n simple_rnn (SimpleRNN)      (None, 128)               49280     ' +
        '\n                                                                 ' +
        '\n dense_1 (Dense)             (None, 10)                1290      ' +
        '\n                                                                 ' +
        '\n=================================================================' +
        '\nTotal params: 361866 (1.38 MB)                                   ' +
        '\nTrainable params: 361866 (1.38 MB)                               ' +
        '\nNon-trainable params: 0 (0.00 Byte)                              ' +
        '\n_________________________________________________________________' +
        '\n'
      );
    } else if (element == 'transformers') {
      this.echo(
        '\n Transformers example' +
        '\n Decorder-Only Transformers architecture -> Generative Pre-training Transformer (GPT) ' +
        '\n' +
        '\n https://chat.openai.com/' +
        '\n'
      );
    } else {
      this.echo(
        '\n error? incorrect input' +
        '\n Type \'help\' for commend list?'
      );
    }
  },
}, { greetings: 'Welcome. Type \'help\' for command list' });
