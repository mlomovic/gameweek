'use strict'

const getPagingData = (data, page, limit) => {

  let { count: totalItems, rows } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);
  if (!rows || !rows.length || rows.length == 0) {
    rows = [{ 'message': 'Nothing found.' }];
  }

  return { totalItems, totalPages, currentPage, rows };
};

module.exports = getPagingData;