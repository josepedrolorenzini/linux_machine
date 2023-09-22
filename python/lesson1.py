names = ['marable','marble and ceramic','luxmarble']

for x in names:
  print(x)






Nameslength = len(names)
if Nameslength > 5:
  print(str(Nameslength) +  str(" mayor 5"))
elif Nameslength > 2:
  print(str(Nameslength) + " mayor 2")
else:
  print(False)


def myFun(num):
     print("Hello from a function "   + str(num))
     
myFun(42)


def myfactorial(num):
    result =0
    print(num)
    if num <= 1:
       print(1)

    while num > 0:
       result = num + result
       num = num-1
       if(result > 50):
          print('fifty++')
       print(result)

myfactorial(12)
print("Hello world")