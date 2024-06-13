import Stripe from 'stripe';  // Correct import statement
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(process.env.stripekey);

export const stripepayment = async (req, res) => {
  const {image,category,size,quantity} = req.body
  console.log("image",image)
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: 'Total Amount',
                description:`Category:${category},Quantity:${quantity},Size:${size.join(", ")}`,
                images:[image]
              },
              
              unit_amount: req.body.amount * 100,
            },
            quantity: quantity,
          },
        ],
        mode: 'payment',
        success_url: 'https://your-website.com/thank-you',
        cancel_url: 'https://your-website.com/cancel',
      });
  
      res.send({ sessionId: session.id });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
};
