const createWidget = (widget, repo) => {
  if (!widget.name) {
    return Promise.reject('name is required');
  }

  return repo.save(widget);
};

export default createWidget;
