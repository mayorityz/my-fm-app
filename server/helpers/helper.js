exports.slug = (string) => {
  let string_ = string.toLowerCase();
  string_ = string_.trim();
  string_ = string_.replace(/ /g, "-");
  string_ = string_.replace(/&/g, "-");
  string_ = string_.replace(/\?/g, "");
  string_ = string_.replace(/,/g, "+");
  string_ = string_.replace(/'/g, "");
  string_ = string_.replace(/"/g, "");
  string_ = string_.replace(/\./g, "");
  string_ = string_ + "+" + Date.now();

  return string_;
};
