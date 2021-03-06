import request from '@/utils/request';

export async function queryArticle (id, params) {
  return request(`articles/${id}`, {
    data: params,
  });
}

export async function queryArticleComment (article_id, comment_id, params) {
  return request(`articles/${article_id}/comments/${comment_id}`, {
    data: params,
  });
}

export async function queryArticleComments (article_id, params) {
  return request(`articles/${article_id}/comments`, {
    data: params,
  });
}

export async function postArticleComment (article_id, params) {
  return request(`articles/${article_id}/comments`, {
    method: 'post',
    data: params,
  });
}
