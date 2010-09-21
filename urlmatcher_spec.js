var TEST_URLS = {
  http: 'http://www.google.co.uk/',
  https: 'https://www.google.co.uk/',
  noHost: '/path/to/a/page.html',
  noPathname: '#no_path',
  noSearch: 'http://www.google.co.uk/page#thing',
  noHash: 'http://www.google.co.uk/search?client=safari&rls=en&q=jasmine',
  kitchenSink: 'http://www.google.co.uk/search?client=safari&rls=en&q=jasmine#first'
}

describe('URLMatcher', function() {
  
  it('should match protocol http', function() {
    var m = new URLMatcher(TEST_URLS.http);
    expect(m.protocol()).toEqual('http:');
  });
  it('should match protocol https', function() {
    var m = new URLMatcher(TEST_URLS.https);
    expect(m.protocol()).toEqual('https:');
  });
  it('should return null is protocol is absent', function() {
    var m = new URLMatcher(TEST_URLS.noHost);
    expect(m.protocol()).toEqual(null);
  });
  
  it('should match host', function() {
    var m = new URLMatcher(TEST_URLS.kitchenSink);
    expect(m.host()).toEqual('www.google.co.uk');
  });
  it('should return null if host is absent', function() {
    var m = new URLMatcher(TEST_URLS.noHost);
    expect(m.host()).toEqual(null);
  });
  
  it('should match pathname with everything present', function() {
    var m = new URLMatcher(TEST_URLS.kitchenSink);
    expect(m.pathname()).toEqual('/search');
  });
  it('should match pathname with host and protocol absent', function() {
    var m = new URLMatcher(TEST_URLS.noHost);
    expect(m.pathname()).toEqual('/path/to/a/page.html');
  });
  it('should return null if pathname is absent', function() {
    var m = new URLMatcher(TEST_URLS.noPathname);
    expect(m.pathname()).toEqual(null);
  });
  
  it('should match search', function() {
    var m = new URLMatcher(TEST_URLS.kitchenSink);
    expect(m.search()).toEqual('?client=safari&rls=en&q=jasmine');
  });
  it('should return null if search is absent', function() {
    var m = new URLMatcher(TEST_URLS.noSearch);
    expect(m.search()).toEqual(null);
  });
  
  it('should match hash', function() {
    var m = new URLMatcher(TEST_URLS.kitchenSink);
    expect(m.hash()).toEqual('#first');
  });
  it('should return null if hash is absent', function() {
    var m = new URLMatcher(TEST_URLS.noHash);
    expect(m.hash()).toEqual(null);
  });
  
});