export default function packageProps(dict, values) {
    let template = ""
    values.forEach((value, index) => {
        if (values.length > 1) {
            if (index == values.length - 1) {
                template = `${template}${dict[value]}`;
            } else {
                template = `${template}${dict[value]},`;
            }
        } else {
            template = `${template}${dict[value]}`;
        }
    });
    return template
}
