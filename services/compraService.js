// services/purchaseService.js

const { Purchase, Supplier, Quotation, User, Product } = require('../models');

class PurchaseService {
    async create(purchaseData) {
        try {
            const quotations = await Quotation.findAll({
                where: { productId: purchaseData.productId }
            });

            if (quotations.length < 3) {
                throw new Error('At least 3 quotations are required to make a purchase');
            }

            const bestQuotation = quotations.reduce((prev, current) => (prev.price < current.price ? prev : current));
            purchaseData.quotationId = bestQuotation.id;
            purchaseData.unitCost = bestQuotation.price;

            const purchase = await Purchase.create(purchaseData);
            return purchase;
        } catch (error) {
            throw error;
        }
    }

    async completePurchase(id) {
        try {
            const purchase = await Purchase.findByPk(id);
            if (!purchase) {
                throw new Error('Purchase not found');
            }

            if (purchase.status !== 'pending') {
                throw new Error('Purchase is not in pending state');
            }

            await db.MovimentacaoProduto.create({
                depositoId: purchase.depositoId,
                produtoId: purchase.productId,
                tipoMovimento: 'Entrada.Compra',
                quantidade: purchase.quantity,
                precoUnitario: purchase.unitCost,
                data: new Date()
            });

            await purchase.update({ status: 'completed' });
            return purchase;
        } catch (error) {
            throw error;
        }
    }

    async findAll(page, pageSize) {
        try {
            const offset = (page - 1) * pageSize;
            const purchases = await Purchase.findAndCountAll({
                limit: pageSize,
                offset: offset,
                include: [
                    { model: Supplier, as: 'fornecedor' },
                    { model: Quotation, as: 'cotacao' },
                    { model: User, as: 'comprador' },
                    { model: Product, as: 'produto' }
                ]
            });
            return purchases;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const purchase = await Purchase.findByPk(id, {
                include: [
                    { model: Supplier, as: 'fornecedor' },
                    { model: Quotation, as: 'cotacao' },
                    { model: User, as: 'comprador' },
                    { model: Product, as: 'produto' }
                ]
            });
            return purchase;
        } catch (error) {
            throw error;
        }
    }

    async cancel(id) {
        try {
            const updatedPurchase = await Purchase.update(
                { status: 'cancelled' },
                { where: { id: id } }
            );
            return updatedPurchase;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PurchaseService;
