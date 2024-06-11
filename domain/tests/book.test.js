import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
    myBook.setWords(1000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(typeof myBook.getAuthor()).toBe('string');
  });

  it('should throw an error when given a non-string author', () => {
    expect(() => myBook.setAuthor(123)).toThrow('not a string');
  });

  it('setAuthor should set author to "Anónimo" when given an empty string', () => {
    myBook.setAuthor('');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check page param is a number', () => {
    expect(typeof myBook.getPages()).toBe('number');
  });

  it('should throw an error when given a non-number', () => {
    expect(() => myBook.setPages('three')).toThrow('not a number');
  });
  it('check pages not < 1', () => {
    expect(myBook.getPages()).toBeGreaterThanOrEqual(1);
  });

  it('should throw an error when given a number lower than 1', () => {
    expect(() => myBook.setPages(-3)).toThrow('number lower than 1');
  });
  it('toString()', () => {
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 1000');
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(1000);
  });

  it('should set words when given a valid positive integer', () => {
    myBook.setWords(5);
    expect(myBook.getWords()).toBe(5);
  });

  it('should truncate and set words when given a valid positive float', () => {
    myBook.setWords(5.7);
    expect(myBook.getWords()).toBe(5);
  });

  it('should throw an error when given a non-number', () => {
    expect(() => myBook.setWords('five')).toThrow('not a number');
  });

  it('should throw an error when given NaN', () => {
    expect(() => myBook.setWords(NaN)).toThrow('not a number');
  });

  it('should throw an error when given a negative number', () => {
    expect(() => myBook.setWords(-3)).toThrow('negative number or zero');
  });

  it('should throw an error when given zero', () => {
    expect(() => myBook.setWords(0)).toThrow('negative number or zero');
  });

  it('should return the correct number of words per page', () => {
    expect(myBook.wordsPerPage()).toBe(1000 / 350);
  });
});
