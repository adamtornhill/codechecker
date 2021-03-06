const commands = {
  async waitForProgressBarNotPresent() {
    // Wait some time to make sure progressbar appeared.
    await this.pause(500);

    return this.waitForElementNotPresent("@progressBar");
  },

  back() {
    this.api.back();
    return this;
  },

  diffFirstTwoRunHistoryItems() {
    this
      .assert.cssClassPresent("@diffSelectedHistoryBtn", "v-btn--disabled")
      .click("@firstHistoryToDiff")
      .click("@secondHistoryToDiff")
      .assert.not.cssClassPresent("@diffSelectedHistoryBtn", "v-btn--disabled")
      .click("@diffSelectedHistoryBtn");

    return this;
  }
};

module.exports = {
  url: function() { 
    return this.api.launchUrl + '/e2e/run-history'; 
  },
  commands: [ commands ],
  elements: {
    page: ".v-data-table",
    tableRows: "tbody tr",
    progressBar: ".v-data-table__progress",
    searchRunNameInput: ".search-run-name input[type='text']",
    searchRunTagInput: ".search-run-tag input[type='text']",
    diffSelectedHistoryBtn: ".diff-run-history-btn",
    firstHistoryToDiff:
      "tbody tr:nth-child(1) td:last-child .v-input--checkbox:nth-child(1)",
    secondHistoryToDiff:
      "tbody tr:nth-child(2) td:last-child .v-input--checkbox:nth-child(2)",
    showStatisticsBtn: "a.show-statistics",
    showDescriptionBtn: "button.description",
    descriptionMenu:
      ".menuable__content__active.run-description-menu .v-card__text",
    showCheckCommandBtn: "button.show-check-command",
  },
  sections: {
    checkCommandDialog: {
      selector: ".v-dialog__content--active .check-command",
      elements: {
        content: ".container",
        closeBtn: ".v-card__title button"
      }
    }
  }
}
