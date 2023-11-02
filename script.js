let serverOrganizer = false;
let gifElements = [];

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
      this.echo(
        '\n N-gram example' +
        '\n' +
        '\n Models that predict the next word in a sequence based on the frequency of word pairs or groups in a text, assigning probabilities to word sequences.' +
        '\n'
      );
    } else if (element == 'rnn') {
      this.echo(
        '\n Recurrent Neural Networks (RNN) example' +
        '\n' +
        '\n A type of neural network that uses a feedback loop to unroll the network, working well with different amounts of sequential data.' +
        '\n'
      );
    } else if (element == 'lstm') {
      this.echo(
        '\n Long Short-Term Memory (LSTM) example' +
        '\n' +
        '\n A type of neural network built on the framework of RNNs. It incorporates a memory cell that can maintain information over longer sequences, thereby mitigating the limitations of the vanilla RNN.' +
        '\n'
      );
    } else if (element == 'transformers') {
      this.echo(
        '\n Transformers example' +
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
}, { greetings: 'Welcome. Type \'help\' for command list' });
