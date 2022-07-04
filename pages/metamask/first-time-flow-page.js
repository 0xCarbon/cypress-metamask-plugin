const app = '#app-content .app';
const welcomePage = '.welcome-page';
const confirmButton = `${welcomePage} .first-time-flow__button`;
module.exports.welcomePageElements = {
  app,
  welcomePage,
  confirmButton,
};

const firstTimeFlowPage = '.first-time-flow';
const importWalletButton = `${firstTimeFlowPage} .select-action__select-button:nth-child(1) .first-time-flow__button`;
const createWalletButton = `${firstTimeFlowPage} .select-action__select-button:nth-child(2) .first-time-flow__button`;
module.exports.firstTimeFlowPageElements = {
  firstTimeFlowPage,
  importWalletButton,
  createWalletButton,
};

const metametricsPage = '.metametrics-opt-in';
const optOutAnalyticsButton = `${metametricsPage} [data-testid="page-container-footer-cancel"]`;
module.exports.metametricsPageElements = {
  metametricsPage,
  optOutAnalyticsButton,
};

const firstTimeFlowFormPageCreate = '.first-time-flow__form';
const firstTimeFlowFormPageImport = '.create-new-vault__form';
const secretWordsInput = `${firstTimeFlowFormPageImport} .import-srp__srp input[type="password"]`;
const passwordInput = `${firstTimeFlowFormPageImport} #password`;
const confirmPasswordInputImport = `${firstTimeFlowFormPageImport} #confirm-password`;
const confirmPasswordInputCreate = `${firstTimeFlowFormPageCreate} #confirm-password`;
const termsCheckbox = `${firstTimeFlowFormPageImport} #create-new-vault__terms-checkbox`;
const importButton = `.create-new-vault__submit-button`;
const createButton = `.first-time-flow__button`;
const newPasswordInput = `${firstTimeFlowFormPageCreate} #create-password`;
const newSignupCheckbox = `${firstTimeFlowFormPageCreate}  .first-time-flow__checkbox`;

module.exports.firstTimeFlowFormPageElements = {
  firstTimeFlowFormPageImport,
  firstTimeFlowFormPageCreate,
  secretWordsInput,
  passwordInput,
  confirmPasswordInputImport,
  confirmPasswordInputCreate,
  termsCheckbox,
  importButton,
  createButton,
  newPasswordInput,
  newSignupCheckbox,
};

const secureYourWalletPage = '.seed-phrase-intro';
const nextButton = `${secureYourWalletPage} button`;
module.exports.secureYourWalletPageElements = {
  secureYourWalletPage,
  nextButton,
};

const endOfFlowPage = '.end-of-flow';
const allDoneButton = `${endOfFlowPage} .first-time-flow__button`;
module.exports.endOfFlowPageElements = {
  endOfFlowPage,
  allDoneButton,
};

const revealSeedPage = '.reveal-seed-phrase';
const remindLaterButton = `${revealSeedPage} .first-time-flow__button`;
module.exports.revealSeedPageElements = {
  revealSeedPage,
  remindLaterButton,
};
