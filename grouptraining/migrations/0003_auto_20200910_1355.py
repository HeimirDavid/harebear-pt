# Generated by Django 3.1 on 2020-09-10 11:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('grouptraining', '0002_auto_20200910_1345'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='grouptraining',
            unique_together=set(),
        ),
        migrations.AlterIndexTogether(
            name='grouptraining',
            index_together={('name', 'slug')},
        ),
    ]
