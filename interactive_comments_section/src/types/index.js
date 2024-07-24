/**
 * @typedef {Object} ImageObject
 * @property {string} png - The URL of the PNG version of the image
 * @property {string} webp - The URL of the WebP version of the image
 */

/**
 * @typedef {Object} UserObject
 * @property {ImageObject} image - The user's avatar image
 * @property {string} username - The username of the user
 */

/**
 * @typedef {Object} ReplyObject
 * @property {number} id - The unique identifier of the reply
 * @property {string} content - The content of the reply
 * @property {string} createdAt - The creation date of the reply
 * @property {number} score - The score of the reply
 * @property {string} replyingTo - The username of the user being replied to
 * @property {UserObject} user - The user who made the reply
 */

/**
 * @typedef {Object} CommentObject
 * @property {number} id - The unique identifier of the comment
 * @property {string} content - The content of the comment
 * @property {string} createdAt - The creation date of the comment
 * @property {number} score - The score of the comment
 * @property {UserObject} user - The user who made the comment
 * @property {ReplyObject[]} replies - The replies to this comment
 */

/**
 * @typedef {Object} CommentsData
 * @property {UserObject} currentUser - The current user's information
 * @property {CommentObject[]} comments - The list of comments
 */

export {};
