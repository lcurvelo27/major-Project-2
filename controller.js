module.exports = {
    create_a: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;

        dbInstance.put_bin({name, price})
            .then(response => res.status(200).send(response))
    },
    read_a: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_bin()
            .then(response => res.status(200).send(response))
    },
    create_b: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;

        dbInstance.put_bin_B({name, price})
            .then(response => res.status(200).send(response))
    },
    read_b: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_bin_B()
            .then(response => res.status(200).send(response))
    },
    create_c: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;

        dbInstance.put_bin_C({name, price})
            .then(response => res.status(200).send(response))
    },
    read_c: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_bin_C()
            .then(response => res.status(200).send(response))
    },
    create_d: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price} = req.body;

        dbInstance.put_bin_D({name, price})
            .then(response => res.status(200).send(response))
    },
    read_d: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_bin_D()
            .then(response => res.status(200).send(response))
    }
}


