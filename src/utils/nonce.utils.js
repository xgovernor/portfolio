const crypto = require('crypto');

// Generate a random nonce value
export const randomBytes = crypto.randomBytes(16).toString('base64');

export const getNonceValue = `nonce-${randomBytes}`;