from curses import echo
import shutil
import platform

def osdetect ():
    osname = platform.system()
    print(osname)


def prefix_engine(botname, botprefix):
    reading_file = open("botgen/" + botname + "/config.json", "r")
    new_file_content = ""

    for line in reading_file:
        stripped_line = line.strip()
        new_line = stripped_line.replace("prf", botprefix)
        new_file_content += new_line +"\n"

    reading_file.close()
    writing_file = open("botgen/" + botname + "/config.json", "w")
    writing_file.write(new_file_content)
    writing_file.close()


def file_copy(botname):
    source_dir = r"template"
    destination_dir = r"botgen/" + botname
    shutil.copytree(source_dir, destination_dir)

def commandes ():
    print("addrole")
    print("ban")
    print("botinfo")
    print("botinfo")
    print("clear")
    print("clearwarn")
    print("coinflip")

def choose_cmds ():
    print("type name commande you want : ")
    cmds = input()
    while not (cmds == 'next'):
        commandes()
        print("type name commande you want : ")
        cmds = input()
        print("your cmds : " + cmds)


print("MakeYourBot\n")
osdetect()

print("name of yout bot :")
botname = input()
file_copy(botname)
print("prefix of your bot :")
botprefix = input()
prefix_engine(botname, botprefix)
print("your bot" + botname + "was create ! Now choose your commande")
commandes()
choose_cmds()