import {Map, List, Seq} from 'immutable';
import {expect} from 'chai';
import {search} from '../src/main';

describe('Application logic should', () => {
  let quotes;
  beforeEach(() => {
    // this will act as the source of all qoutes
    // operate on this one
    quotes = Seq.of(
      Map({
        quote: 'He was always earnestly urging those who were associated with him to ' +
               'make practical application of his teachings, using some such ' +
               'arguments as the following. Virtue, he said, is not simply theoretical ' +
               'knowledge, but it is practical application as well, just like the arts ' +
               'of medicine and music',
        author: 'Musonius Rufus',
        tags: List.of('practice')
      }),
      Map({
        quote: 'With regard to whatever objects give you delight, are useful, or are ' +
               'deeply loved, remember to tell yourself of what general nature they ' +
               'are, beginning from the most insignificant things. If, for example, ' +
               'you are fond of a specific ceramic cup, remind yourself that it is ' +
               'only ceramic cups in general of which you are fond. Then, if it ' +
               'breaks, you will not be disturbed. If you kiss your child, or your ' +
               'wife, say that you only kiss things which are human, and thus you' +
               'will not be disturbed if either of them dies.',
         author: 'epictetus',
         tags: List.of('attachment')
      })
    );
  });

  describe('return qoutes from specific author', () => {
    it('should return all qoutes from musonius rufus', () => {
      let searchQuery = search(quotes, 'Musonius Rufus', 'author');
      expect(searchQuery.first().get('quote')).to.equal(
          'He was always earnestly urging those who were associated with him to ' +
          'make practical application of his teachings, using some such ' +
          'arguments as the following. Virtue, he said, is not simply theoretical ' +
          'knowledge, but it is practical application as well, just like the arts ' +
          'of medicine and music'
      );
      expect(searchQuery.first().get('author')).to.equal('Musonius Rufus');
    });
  });

  describe('return quotes from specific tag', () => {
    it('should return all quotes with tag "practice"', () => {
      let searchQuery = search(quotes, 'practice', 'tags');
      expect(searchQuery.first().get('author')).to.equal('Musonius Rufus');
    });
  });
});
