n = int(input())

a = [[0 for i in xrange(4)] for i in xrange(n)]
for i in range(n):
    a[i] = raw_input()
    a[i] = a[i].split(" ")
    a[i][1] = int(a[i][1])
    a[i][2] = int(a[i][2])
    a[i].append(a[i][1] / float(a[i][2]))

a.sort(key=lambda x:x[3], reverse=True)
    
for i in range(n):
    print(a[i][0] + " " + str(a[i][1]) + " " + str(a[i][2]))
