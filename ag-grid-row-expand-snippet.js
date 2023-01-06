const gridOptions = {
  // other grid options...
  processRowPostCreate: params => {
    // Check if the row is a group row
    if (params.node.group) {
      // Check if the group is expanded
      if (params.node.expanded) {
        // Fetch the child data for the group from the server or wherever you have it stored
        fetchChildData(params.node.data.groupId).then(childData => {
          // Update the child data for the group
          params.api.setRowData(params.node.allLeafChildren, childData);
        });
      }
    }
  }
};
