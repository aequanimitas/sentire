import express from 'express';
import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import reducer from './src/reducer';
import { QuoteContainer } from './src/components/Quote';

const app = express();

app.use(express.static('dist'));

app.get('/', handleRender);

function handleRender(req, res) {

  const quotes = [
    {
     "quote": "With regard to whatever objects give you delight, are useful, or are deeply loved, remember to tell yourself of what general nature they are, beginning from the most insignificant things. If, for example, you are fond of a specific ceramic cup, remind yourself that it is only ceramic cups in general of which you are fond. Then, if it breaks, you will not be disturbed. If you kiss your child, or your wife, say that you only kiss things which are human, and thus you will not be disturbed if either of them dies.",
     "author": "epictetus",
     "book": "enchiridion",
     "verse": "4",
     "tags": ["attachment", "impression"]
    }, {
      "quote": "Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions. Things not in our control are body, property, reputation, command, and, in one word, whatever are not our own actions. The things in our control are by nature free, unrestrained, unhindered; but those not in our control are weak, slavish, restrained, belonging to others. Remember, then, that if you suppose that things which are slavish by nature are also free, and that what belongs to others is your own, then you will be hindered. You will lament, you will be disturbed, and you will find fault both with gods and men. But if you suppose that only to be your own which is your own, and what belongs to others such as it really is, then no one will ever compel you or restrain you. Further, you will find fault with no one or accuse no one. You will do nothing against your will. No one will hurt you, you will have no enemies, and you not be harmed. Aiming therefore at such great things, remember that you must not allow yourself to be carried, even with a slight tendency, towards the attainment of lesser things. Instead, you must entirely quit some things and for the present postpone the rest. But if you would both have these great things, along with power and riches, then you will not gain even the latter, because you aim at the former too: but you will absolutely fail of the former, by which alone happiness and freedom are achieved. Work, therefore to be able to say to every harsh appearance, 'You are but an appearance, and not absolutely the thing you appear to be.' And then examine it by those rules which you have, and first, and chiefly, by this: whether it concerns the things which are in our own control, or those which are not; and, if it concerns anything not in our control, be prepared to say that it is nothing to you.",
      "author": "epictetus",
      "book": "enchiridion",
      "verse": "1",
      "tags": ["control"]
    }
  ];
  const store = createStore(reducer, {quotes: quotes});
  const html = renderToString(
    <Provider store={store}>
      <QuoteContainer /> 
    </Provider>
  );

  const initialState = store.getState();
  res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Sentire</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
    </head>
    <body>
    <div id="react-container" class="container">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)} 
    </script>
    <script src="/bundle.js"></script>  
    </body>
    </html>
  `;
}

export { app }