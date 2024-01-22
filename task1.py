import math

cart_total=0;
total_quantity=0;
giftwrapfee=0;
shippingfee=0;
def flat10Discount():
    if cart_total<200:
        return 0
    
    return (cart_total*0.1)

def bulk5discount():
    discount=0;
    if qa>10:
        discount=discount+ ((qa*20)*0.05)
    if qb>10:
        discount=discount+ ((qb*40)*0.05)
    if qc>10:
        discount=discount+ ((qb*50)*0.05)

    return discount

def bulk10discount():
    if total_quantity<20:
        return 0
    return (cart_total*0.1)

def tireed50discount():
    discount=0;
    if total_quantity<30 and qa>15 or qb<15 or qc<15:
        return 0
    if qa>15:
        discount=discount+(((15-qa)*20)*0.5)
    if qb>15:
        discount=discount+(((15-qb)*40)*0.5)
    if qc>15:
        discount=discount+(((15-qc)*50)*0.5)

    return discount


qa=int(input("Enter the quantity of product a:"))
qb=int(input("Enter the quantity of product b:"))
qc=int(input("Enter the quantity of product c:"))
giftwrap=(input("Do you want gift wrap[y/n]:"))

cart_total=(qa*20)+(qb*40)+(qc*50)
total_quantity=qa+qb+qc
if giftwrap=='y':
    giftwrapfee=total_quantity

shippingfee=(math.ceil(total_quantity/10))*5

discount_map={
    'flat_10_discount':flat10Discount(),
    'bulk_5_discount':bulk5discount(),
    'bulk_10_discount':bulk10discount(),
    'tireed_50_discount':tireed50discount()
}
max_discount = max(discount_map, key=lambda k: discount_map[k])
max_discountvalue=discount_map[max_discount]
total_amount=cart_total+giftwrapfee+shippingfee-max_discountvalue

print("Subtotal:",cart_total)
print("Discount Applied:",max_discount)
print("Discount:",max_discountvalue)
print("Gift Wrap Fee:",giftwrapfee)
print("Shipping fee:",shippingfee)
print("Total amount:",total_amount)