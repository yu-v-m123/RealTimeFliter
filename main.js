$(function () {
  searchWord = function () {
    let searchResult,
      searchText = $(this).val(), // 検索ボックスに入力された値
      targetText,
      performResult,
      hitNum;

    // 検索結果を格納するための配列を用意
    searchResult = [];
    performResult = [];

    // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();
    $('.search-result__hit-num').empty();

    // 検索ボックスに値が入ってる場合
    if (searchText != '') {
      $('.img_box').each(function () {
        let isShow = false;
        $(this).find('span').each(function () {
          targetText = $(this).text();

          // 検索対象となるリストに入力された文字列が存在するかどうかを判断
          if (targetText.indexOf(searchText) != -1) {
            // 存在する場合はそのリストのテキストを用意した配列に格納
            searchResult.push(targetText);
          } else {
            isShow = true;
          }
        });
        if (isShow) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
      hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
      $('.search-result__hit-num').append(hitNum);
    } else {
      // 検索ボックスが空の場合
      $('.img_box').each(function () {
        // 非表示のものを表示させる。
        if ($(this).css('display') !== 'block') {
          $(this).show();
        }
      });
    }
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});