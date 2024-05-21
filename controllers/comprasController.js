// controllers/purchaseController.js

class PurchaseController {
    constructor(purchaseService) {
        this.purchaseService = purchaseService;
    }

    async create(req, res) {
        const { productId, supplierId, quantity, buyerId, depositoId } = req.body;
        try {
            const newPurchase = await this.purchaseService.create({
                productId,
                supplierId,
                quantity,
                buyerId,
                depositoId
            });
            res.status(200).json(newPurchase);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar compra.' });
        }
    }

    async completePurchase(req, res) {
        const { id } = req.params;
        try {
            const completedPurchase = await this.purchaseService.completePurchase(id);
            res.status(200).json(completedPurchase);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao completar compra.' });
        }
    }

    async findAll(req, res) {
        const { page = 1, pageSize = 10 } = req.query;
        try {
            const purchases = await this.purchaseService.findAll(parseInt(page), parseInt(pageSize));
            res.status(200).json(purchases);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar compras.' });
        }
    }

    async findById(req, res) {
        const { id } = req.params;
        try {
            const purchase = await this.purchaseService.findById(id);
            if (!purchase) {
                return res.status(404).json({ error: 'Compra não encontrada.' });
            }
            res.status(200).json(purchase);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar compra.' });
        }
    }

    async cancel(req, res) {
        const { id } = req.params;
        try {
            const cancelledPurchase = await this.purchaseService.cancel(id);
            res.status(200).json(cancelledPurchase);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cancelar compra.' });
        }
    }
}

module.exports = PurchaseController;
