
const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

setGlobalOptions({ maxInstances: 10 });
admin.initializeApp();


exports.onDoubtCreated = onDocumentCreated(
  "doubts/{doubtId}",
  async (event) => {
    const snap = event.data;
    const doubtId = event.params.doubtId;

    if (!snap) return;

    const doubt = snap.data();
    logger.info("New doubt created", { doubtId, text: doubt.text });

    // Temporary backend logic
    await snap.ref.update({
      aiStatus: "pending",
      blocked: false,
    });
  }
);

