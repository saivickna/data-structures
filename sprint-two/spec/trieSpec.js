describe('trie', function() {
  var trie = Trie();


  // var file = new File([""], 'dictionary.txt', {type: 'text/plain'});
  // var file = new File([" "], 'dictionary.txt', {type: 'text/plain'});

  // var reader = new FileReader();
  // reader.onload = function(progressEvent) {
  //   // By lines
  //   var lines = this.result.split('\n');
  //   for (var line = 0; line < lines.length; line++) { 

  //     trie.addWord(lines[line], trie.root, 0);
  //   }
  // };
  // reader.readAsText(file);
  // alert(trie.t9Prediction('534363', trie.root, 0, ''));
  // beforeEach(function() {
  //   trie ;
  // });

  it('should have methods named "addWord", "t9Prediction", and "contains"', function() {
    expect(trie.addWord).to.be.a('function');
    expect(trie.t9Prediction).to.be.a('function');
    expect(trie.contains).to.be.a('function');
  });


  it('should include new word when added', function() {
    trie.addWord('test', trie.root, 0);
    expect(trie.contains('test', trie.root, 0)).to.be.true;
  });

  it('should give t9 predictions', function() {
    trie.addWord('tester', trie.root, 0);
    trie.addWord('teal', trie.root, 0);
    trie.addWord('apple', trie.root, 0);
    trie.addWord('application', trie.root, 0);
    trie.addWord('banana', trie.root, 0);
    trie.addWord('sai', trie.root, 0);
    trie.addWord('ranit', trie.root, 0);
    trie.addWord('hack', trie.root, 0);
    trie.addWord('hacker', trie.root, 0);
    trie.addWord('hacking', trie.root, 0);
    trie.addWord('react', trie.root, 0);
    trie.addWord('reactor', trie.root, 0);
    expect(trie.t9Prediction('7322', trie.root, 0, '')).to.equal('react');
  });

  // add more tests here to test the functionality of linkedList
});